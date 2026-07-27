import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-germany');
}

export default function TibiaretroOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-germany" />;
}
