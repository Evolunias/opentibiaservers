import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-unline-ots');
}

export default function NewUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="new-unline-ots" />;
}
