import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-canada');
}

export default function TibiaretroOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-canada" />;
}
