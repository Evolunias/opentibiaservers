import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-old-school-server-canada');
}

export default function LumineraOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-old-school-server-canada" />;
}
