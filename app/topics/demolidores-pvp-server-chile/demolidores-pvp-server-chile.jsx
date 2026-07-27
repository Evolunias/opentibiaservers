import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-chile');
}

export default function DemolidoresPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-chile" />;
}
