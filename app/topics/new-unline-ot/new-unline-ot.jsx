import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-ot');
}

export default function NewUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="new-unline-ot" />;
}
