import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-chile');
}

export default function OtServersChileKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-chile" />;
}
