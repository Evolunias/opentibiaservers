import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-germany');
}

export default function LumineraOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-germany" />;
}
