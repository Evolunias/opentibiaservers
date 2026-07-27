import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-non-pvp-server');
}

export default function Originaltibia81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-non-pvp-server" />;
}
