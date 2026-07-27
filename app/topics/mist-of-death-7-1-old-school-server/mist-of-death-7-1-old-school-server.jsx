import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-1-old-school-server');
}

export default function MistOfDeath71OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-1-old-school-server" />;
}
