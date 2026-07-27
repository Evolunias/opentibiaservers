import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-uk');
}

export default function UnlinePvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-uk" />;
}
