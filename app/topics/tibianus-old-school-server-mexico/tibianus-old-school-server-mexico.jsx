import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-mexico');
}

export default function TibianusOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-mexico" />;
}
