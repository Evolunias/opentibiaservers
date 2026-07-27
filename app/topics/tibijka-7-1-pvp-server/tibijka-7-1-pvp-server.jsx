import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-pvp-server');
}

export default function Tibijka71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-pvp-server" />;
}
