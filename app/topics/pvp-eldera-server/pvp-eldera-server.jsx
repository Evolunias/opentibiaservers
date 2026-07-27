import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-eldera-server');
}

export default function PvpElderaServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-eldera-server" />;
}
