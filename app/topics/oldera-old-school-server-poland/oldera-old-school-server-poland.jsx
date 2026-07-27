import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-poland');
}

export default function OlderaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-poland" />;
}
