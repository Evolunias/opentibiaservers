import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-old-school-server-south-america');
}

export default function MistOfDeathOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-old-school-server-south-america" />;
}
