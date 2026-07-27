import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-brazil');
}

export default function TibianusOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-brazil" />;
}
