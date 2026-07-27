import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-south-america');
}

export default function LumineraOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-south-america" />;
}
