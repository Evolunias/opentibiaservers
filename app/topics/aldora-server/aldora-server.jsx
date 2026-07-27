import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-server');
}

export default function AldoraServerKeywordPage() {
  return <StaticKeywordPage slug="aldora-server" />;
}
