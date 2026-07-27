import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-old-school-server');
}

export default function NtoStar14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-old-school-server" />;
}
