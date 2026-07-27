import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-latin-america');
}

export default function TibiascapeOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-latin-america" />;
}
