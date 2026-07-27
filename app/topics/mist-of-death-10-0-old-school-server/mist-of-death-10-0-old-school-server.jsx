import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-old-school-server');
}

export default function MistOfDeath100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-old-school-server" />;
}
