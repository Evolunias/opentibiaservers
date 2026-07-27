import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-demolidores-ot');
}

export default function OldSchoolDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-demolidores-ot" />;
}
