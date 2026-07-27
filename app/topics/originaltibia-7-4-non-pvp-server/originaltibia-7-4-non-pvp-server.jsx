import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-non-pvp-server');
}

export default function Originaltibia74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-non-pvp-server" />;
}
