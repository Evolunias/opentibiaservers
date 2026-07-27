import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-ot');
}

export default function OldSchoolNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-ot" />;
}
