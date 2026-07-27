import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-germany');
}

export default function OlderaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-germany" />;
}
