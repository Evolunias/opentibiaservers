import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-north-america');
}

export default function HighExpOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-north-america" />;
}
