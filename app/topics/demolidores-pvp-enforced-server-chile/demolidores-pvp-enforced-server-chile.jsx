import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-chile');
}

export default function DemolidoresPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-chile" />;
}
