import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-latin-america');
}

export default function MistOfDeathOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-latin-america" />;
}
