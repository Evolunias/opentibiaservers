import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-website');
}

export default function NewYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-website" />;
}
