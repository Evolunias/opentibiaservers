import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-old-school-server-sweden');
}

export default function TibiascapeOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-old-school-server-sweden" />;
}
