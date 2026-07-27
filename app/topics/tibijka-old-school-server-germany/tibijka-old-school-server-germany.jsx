import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-germany');
}

export default function TibijkaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-germany" />;
}
