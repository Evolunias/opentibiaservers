import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-old-school-server-germany');
}

export default function RealestaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-old-school-server-germany" />;
}
