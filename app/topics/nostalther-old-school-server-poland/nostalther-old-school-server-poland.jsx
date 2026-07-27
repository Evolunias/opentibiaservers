import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-old-school-server-poland');
}

export default function NostaltherOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-old-school-server-poland" />;
}
