import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-argentina');
}

export default function NostaltherPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-argentina" />;
}
