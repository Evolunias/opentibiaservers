import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-canada');
}

export default function TibiascapeOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-canada" />;
}
