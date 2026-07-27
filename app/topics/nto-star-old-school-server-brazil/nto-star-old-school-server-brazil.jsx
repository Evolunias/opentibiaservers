import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-brazil');
}

export default function NtoStarOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-brazil" />;
}
