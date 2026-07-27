import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-aurera-global-ots');
}

export default function NewAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="new-aurera-global-ots" />;
}
