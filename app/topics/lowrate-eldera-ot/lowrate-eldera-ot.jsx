import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-ot');
}

export default function LowrateElderaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-ot" />;
}
