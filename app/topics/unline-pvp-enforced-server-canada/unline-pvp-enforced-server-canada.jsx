import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-canada');
}

export default function UnlinePvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-canada" />;
}
