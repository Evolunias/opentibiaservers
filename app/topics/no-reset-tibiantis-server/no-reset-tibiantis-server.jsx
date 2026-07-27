import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-server');
}

export default function NoResetTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-server" />;
}
