import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-server-europe');
}

export default function OldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-server-europe" />;
}
