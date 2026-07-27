import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-ots');
}

export default function OldSchoolNostaltherOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-ots" />;
}
