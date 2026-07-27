import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-website');
}

export default function NewOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-website" />;
}
