import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-old-school-server-south-america');
}

export default function ImperianicOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-old-school-server-south-america" />;
}
