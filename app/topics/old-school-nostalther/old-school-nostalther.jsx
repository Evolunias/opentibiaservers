import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther');
}

export default function OldSchoolNostaltherKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther" />;
}
