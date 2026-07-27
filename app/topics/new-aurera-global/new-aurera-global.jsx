import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global');
}

export default function NewAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global" />;
}
