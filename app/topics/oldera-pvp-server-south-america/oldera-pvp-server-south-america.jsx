import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-south-america');
}

export default function OlderaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-south-america" />;
}
