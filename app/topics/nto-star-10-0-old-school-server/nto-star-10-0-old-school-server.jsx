import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-10-0-old-school-server');
}

export default function NtoStar100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-10-0-old-school-server" />;
}
