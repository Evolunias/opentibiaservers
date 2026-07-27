import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-old-school-server');
}

export default function MistOfDeath15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-old-school-server" />;
}
