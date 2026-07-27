import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-non-pvp-server');
}

export default function Originaltibia80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-non-pvp-server" />;
}
