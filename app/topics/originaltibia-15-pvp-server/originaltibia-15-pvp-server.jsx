import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-pvp-server');
}

export default function Originaltibia15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-pvp-server" />;
}
