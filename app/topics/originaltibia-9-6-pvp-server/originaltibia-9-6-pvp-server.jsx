import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-pvp-server');
}

export default function Originaltibia96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-pvp-server" />;
}
