import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-pvp-server');
}

export default function Originaltibia76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-pvp-server" />;
}
