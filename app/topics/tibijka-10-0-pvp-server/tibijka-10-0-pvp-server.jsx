import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-pvp-server');
}

export default function Tibijka100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-pvp-server" />;
}
