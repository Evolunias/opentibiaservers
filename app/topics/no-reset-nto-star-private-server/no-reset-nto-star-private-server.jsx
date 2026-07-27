import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-private-server');
}

export default function NoResetNtoStarPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-private-server" />;
}
