import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-official');
}

export default function NoResetTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-official" />;
}
