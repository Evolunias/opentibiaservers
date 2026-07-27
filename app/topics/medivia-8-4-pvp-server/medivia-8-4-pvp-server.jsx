import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-pvp-server');
}

export default function Medivia84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-pvp-server" />;
}
