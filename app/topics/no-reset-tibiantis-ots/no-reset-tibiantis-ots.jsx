import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-ots');
}

export default function NoResetTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-ots" />;
}
