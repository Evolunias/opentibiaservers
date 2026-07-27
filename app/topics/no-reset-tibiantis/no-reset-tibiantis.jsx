import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis');
}

export default function NoResetTibiantisKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis" />;
}
