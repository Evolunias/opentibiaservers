import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-6-pvp-server');
}

export default function Originaltibia86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-6-pvp-server" />;
}
