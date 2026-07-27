import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-6-non-pvp-server');
}

export default function Medivia86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-6-non-pvp-server" />;
}
