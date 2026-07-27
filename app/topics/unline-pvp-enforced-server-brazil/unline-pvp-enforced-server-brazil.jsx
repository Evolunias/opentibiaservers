import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-brazil');
}

export default function UnlinePvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-brazil" />;
}
