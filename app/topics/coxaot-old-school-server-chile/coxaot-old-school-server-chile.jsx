import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-old-school-server-chile');
}

export default function CoxaotOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="coxaot-old-school-server-chile" />;
}
