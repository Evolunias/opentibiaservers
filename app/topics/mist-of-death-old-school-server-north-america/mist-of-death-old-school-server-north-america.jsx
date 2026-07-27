import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-north-america');
}

export default function MistOfDeathOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-north-america" />;
}
