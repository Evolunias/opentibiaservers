import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-nostalther-server');
}

export default function NonPvpNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-nostalther-server" />;
}
