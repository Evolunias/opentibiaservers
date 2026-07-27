import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-realesta-server');
}

export default function NonPvpRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-realesta-server" />;
}
