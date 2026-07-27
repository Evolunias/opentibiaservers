import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot');
}

export default function TopRubinotKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot" />;
}
