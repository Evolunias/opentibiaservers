import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-pvp-server');
}

export default function Originaltibia100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-pvp-server" />;
}
