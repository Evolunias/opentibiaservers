import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-non-pvp-server');
}

export default function Originaltibia13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-non-pvp-server" />;
}
