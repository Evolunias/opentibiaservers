import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-argentina');
}

export default function TibiaretroOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-argentina" />;
}
