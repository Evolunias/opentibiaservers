import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-poland');
}

export default function TibijkaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-poland" />;
}
