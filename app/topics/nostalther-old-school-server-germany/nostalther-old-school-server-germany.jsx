import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-germany');
}

export default function NostaltherOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-germany" />;
}
