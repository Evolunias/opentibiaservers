import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-client');
}

export default function OldSchoolNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-client" />;
}
