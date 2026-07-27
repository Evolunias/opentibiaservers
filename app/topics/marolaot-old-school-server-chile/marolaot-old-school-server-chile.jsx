import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-old-school-server-chile');
}

export default function MarolaotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="marolaot-old-school-server-chile" />;
}
