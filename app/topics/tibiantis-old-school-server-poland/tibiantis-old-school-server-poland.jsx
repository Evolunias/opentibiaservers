import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-poland');
}

export default function TibiantisOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-poland" />;
}
