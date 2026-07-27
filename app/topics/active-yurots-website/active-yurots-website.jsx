import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-yurots-website');
}

export default function ActiveYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-yurots-website" />;
}
