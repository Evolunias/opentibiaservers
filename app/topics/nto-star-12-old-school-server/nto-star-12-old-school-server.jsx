import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-old-school-server');
}

export default function NtoStar12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-old-school-server" />;
}
