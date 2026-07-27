import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-non-pvp-server');
}

export default function Originaltibia96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-non-pvp-server" />;
}
