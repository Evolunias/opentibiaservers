import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-europe');
}

export default function OlderaOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-europe" />;
}
