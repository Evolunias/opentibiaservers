import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-canada');
}

export default function NostaltherPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-canada" />;
}
