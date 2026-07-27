import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-old-school');
}

export default function MyaacOldSchoolKeywordPage() {
  return <StaticKeywordPage slug="myaac-old-school" />;
}
