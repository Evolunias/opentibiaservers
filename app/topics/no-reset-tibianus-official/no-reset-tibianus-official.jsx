import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-official');
}

export default function NoResetTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-official" />;
}
