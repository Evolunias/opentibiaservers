import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-old-school-server-canada');
}

export default function TibianusOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-old-school-server-canada" />;
}
