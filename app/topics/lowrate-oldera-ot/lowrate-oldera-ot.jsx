import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-ot');
}

export default function LowrateOlderaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-ot" />;
}
