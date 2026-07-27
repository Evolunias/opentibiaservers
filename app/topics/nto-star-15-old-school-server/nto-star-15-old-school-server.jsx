import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-old-school-server');
}

export default function NtoStar15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-old-school-server" />;
}
