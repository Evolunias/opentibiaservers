import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-eldera-server');
}

export default function NonPvpElderaServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-eldera-server" />;
}
