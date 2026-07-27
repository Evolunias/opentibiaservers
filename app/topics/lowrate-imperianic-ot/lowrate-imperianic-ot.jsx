import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-imperianic-ot');
}

export default function LowrateImperianicOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-imperianic-ot" />;
}
