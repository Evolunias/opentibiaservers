import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-usa');
}

export default function TibiascapeOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-usa" />;
}
