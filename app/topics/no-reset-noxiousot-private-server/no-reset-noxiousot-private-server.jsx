import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-private-server');
}

export default function NoResetNoxiousotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-private-server" />;
}
