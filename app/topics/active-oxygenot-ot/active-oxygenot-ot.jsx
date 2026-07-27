import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-ot');
}

export default function ActiveOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-ot" />;
}
