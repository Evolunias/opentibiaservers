import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-old-school-server-chile');
}

export default function AmeriaOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="ameria-old-school-server-chile" />;
}
