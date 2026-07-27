import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-south-america');
}

export default function TibiaretroOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-south-america" />;
}
