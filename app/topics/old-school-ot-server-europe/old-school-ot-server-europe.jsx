import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ot-server-europe');
}

export default function OldSchoolOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-ot-server-europe" />;
}
