import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-client');
}

export default function OldSchoolNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-client" />;
}
