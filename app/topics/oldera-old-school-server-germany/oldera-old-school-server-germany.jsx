import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-old-school-server-germany');
}

export default function OlderaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-old-school-server-germany" />;
}
