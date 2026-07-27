import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-13-old-school-server');
}

export default function NtoStar13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-13-old-school-server" />;
}
