import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-germany');
}

export default function MistOfDeathOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-germany" />;
}
