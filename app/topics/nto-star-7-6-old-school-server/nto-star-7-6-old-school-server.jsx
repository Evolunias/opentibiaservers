import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-6-old-school-server');
}

export default function NtoStar76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-6-old-school-server" />;
}
