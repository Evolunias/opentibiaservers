import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-non-pvp-server');
}

export default function Medivia76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-non-pvp-server" />;
}
