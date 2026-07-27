import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-private-server');
}

export default function NoResetNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-private-server" />;
}
