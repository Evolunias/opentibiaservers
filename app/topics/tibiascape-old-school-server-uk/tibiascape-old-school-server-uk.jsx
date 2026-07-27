import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-uk');
}

export default function TibiascapeOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-uk" />;
}
