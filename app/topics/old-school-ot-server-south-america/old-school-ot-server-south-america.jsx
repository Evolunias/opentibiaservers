import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-south-america');
}

export default function OldSchoolOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-south-america" />;
}
