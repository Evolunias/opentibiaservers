import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-argentina');
}

export default function TibiascapeOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-argentina" />;
}
