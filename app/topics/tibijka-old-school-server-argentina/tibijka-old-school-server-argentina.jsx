import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-argentina');
}

export default function TibijkaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-argentina" />;
}
