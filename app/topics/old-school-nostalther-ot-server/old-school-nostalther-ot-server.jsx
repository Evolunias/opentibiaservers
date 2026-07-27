import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-ot-server');
}

export default function OldSchoolNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-ot-server" />;
}
