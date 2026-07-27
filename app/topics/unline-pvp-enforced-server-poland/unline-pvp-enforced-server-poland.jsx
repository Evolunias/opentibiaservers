import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-poland');
}

export default function UnlinePvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-poland" />;
}
