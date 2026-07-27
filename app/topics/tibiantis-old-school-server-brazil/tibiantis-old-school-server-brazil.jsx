import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-old-school-server-brazil');
}

export default function TibiantisOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-old-school-server-brazil" />;
}
