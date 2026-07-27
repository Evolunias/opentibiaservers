import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-11-old-school-server');
}

export default function NtoStar11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-11-old-school-server" />;
}
