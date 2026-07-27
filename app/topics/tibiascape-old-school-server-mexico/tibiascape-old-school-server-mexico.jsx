import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-mexico');
}

export default function TibiascapeOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-mexico" />;
}
