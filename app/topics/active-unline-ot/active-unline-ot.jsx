import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-unline-ot');
}

export default function ActiveUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="active-unline-ot" />;
}
