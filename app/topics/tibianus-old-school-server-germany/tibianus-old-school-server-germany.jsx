import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-germany');
}

export default function TibianusOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-germany" />;
}
