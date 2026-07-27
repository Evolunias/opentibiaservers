import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-yurots-ot');
}

export default function TopYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="top-yurots-ot" />;
}
