import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-pvp-server');
}

export default function Originaltibia14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-pvp-server" />;
}
