import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-france');
}

export default function MistOfDeathOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-france" />;
}
