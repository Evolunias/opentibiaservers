import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-pvp-server');
}

export default function Originaltibia13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-pvp-server" />;
}
