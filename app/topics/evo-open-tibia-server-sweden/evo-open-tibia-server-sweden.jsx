import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-open-tibia-server-sweden');
}

export default function EvoOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-open-tibia-server-sweden" />;
}
