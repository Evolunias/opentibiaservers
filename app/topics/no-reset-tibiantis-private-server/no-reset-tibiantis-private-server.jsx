import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-private-server');
}

export default function NoResetTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-private-server" />;
}
