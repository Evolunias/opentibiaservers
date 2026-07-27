import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-old-school-server');
}

export default function MistOfDeath14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-old-school-server" />;
}
