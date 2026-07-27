import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-usa');
}

export default function NostaltherPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-usa" />;
}
