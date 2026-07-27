import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-old-school-server');
}

export default function NtoStar84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-old-school-server" />;
}
