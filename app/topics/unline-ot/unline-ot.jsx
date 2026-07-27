import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-ot');
}

export default function UnlineOtKeywordPage() {
  return <StaticKeywordPage slug="unline-ot" />;
}
