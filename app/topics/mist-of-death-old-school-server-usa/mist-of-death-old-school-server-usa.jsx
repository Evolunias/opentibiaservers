import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-usa');
}

export default function MistOfDeathOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-usa" />;
}
