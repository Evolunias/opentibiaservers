import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-website');
}

export default function BestOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-website" />;
}
