import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-98-old-school-server');
}

export default function MistOfDeath1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-98-old-school-server" />;
}
