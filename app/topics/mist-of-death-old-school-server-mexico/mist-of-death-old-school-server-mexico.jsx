import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-mexico');
}

export default function MistOfDeathOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-mexico" />;
}
