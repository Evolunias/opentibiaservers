import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-old-school-server-chile');
}

export default function DemolidoresOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="demolidores-old-school-server-chile" />;
}
