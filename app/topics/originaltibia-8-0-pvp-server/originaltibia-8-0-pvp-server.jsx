import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-pvp-server');
}

export default function Originaltibia80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-pvp-server" />;
}
