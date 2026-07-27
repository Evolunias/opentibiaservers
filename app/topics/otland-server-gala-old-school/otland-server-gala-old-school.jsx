import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-old-school');
}

export default function OtlandServerGalaOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-old-school" />;
}
