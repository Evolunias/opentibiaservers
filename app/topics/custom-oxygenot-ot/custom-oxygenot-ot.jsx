import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-ot');
}

export default function CustomOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-ot" />;
}
