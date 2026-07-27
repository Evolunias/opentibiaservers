import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-private-server');
}

export default function NoResetSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-private-server" />;
}
