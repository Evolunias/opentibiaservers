import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-north-america');
}

export default function UnlinePvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-north-america" />;
}
