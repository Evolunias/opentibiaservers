import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-germany');
}

export default function TibiantisOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-germany" />;
}
