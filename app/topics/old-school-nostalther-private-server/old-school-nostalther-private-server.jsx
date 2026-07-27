import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-private-server');
}

export default function OldSchoolNostaltherPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-private-server" />;
}
