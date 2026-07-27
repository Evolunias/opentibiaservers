import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-servers-europe');
}

export default function OldSchoolServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-servers-europe" />;
}
