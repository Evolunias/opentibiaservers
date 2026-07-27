import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-sweden');
}

export default function TibiaretroOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-sweden" />;
}
