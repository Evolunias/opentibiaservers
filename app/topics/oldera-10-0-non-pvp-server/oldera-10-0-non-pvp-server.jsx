import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-non-pvp-server');
}

export default function Oldera100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-non-pvp-server" />;
}
