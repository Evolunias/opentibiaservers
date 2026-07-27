import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-server');
}

export default function OldSchoolNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-server" />;
}
