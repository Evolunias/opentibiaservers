import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-54-pvp-server');
}

export default function Originaltibia854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-54-pvp-server" />;
}
