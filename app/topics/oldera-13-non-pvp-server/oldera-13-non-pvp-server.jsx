import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-non-pvp-server');
}

export default function Oldera13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-non-pvp-server" />;
}
