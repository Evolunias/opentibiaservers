import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-chile');
}

export default function MediviaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-chile" />;
}
