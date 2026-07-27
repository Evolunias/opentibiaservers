import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-0-old-school-server');
}

export default function MistOfDeath80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-0-old-school-server" />;
}
