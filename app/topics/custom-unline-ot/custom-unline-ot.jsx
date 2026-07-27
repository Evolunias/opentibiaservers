import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-ot');
}

export default function CustomUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-ot" />;
}
