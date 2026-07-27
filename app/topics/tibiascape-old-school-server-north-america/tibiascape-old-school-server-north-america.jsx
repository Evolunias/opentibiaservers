import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-north-america');
}

export default function TibiascapeOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-north-america" />;
}
