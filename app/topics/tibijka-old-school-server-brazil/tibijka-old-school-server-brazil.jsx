import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-old-school-server-brazil');
}

export default function TibijkaOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-old-school-server-brazil" />;
}
