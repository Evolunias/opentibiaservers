import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-pvp-server');
}

export default function Medivia80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-pvp-server" />;
}
