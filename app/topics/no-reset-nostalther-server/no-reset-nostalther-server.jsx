import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-server');
}

export default function NoResetNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-server" />;
}
