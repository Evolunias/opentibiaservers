import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-old-school-server-argentina');
}

export default function NtoStarOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-old-school-server-argentina" />;
}
