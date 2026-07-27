import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-south-america');
}

export default function OldSchoolServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-south-america" />;
}
