import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-poland');
}

export default function MistOfDeathOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-poland" />;
}
