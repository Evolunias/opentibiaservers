import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-old-school-server');
}

export default function Tibiaretro86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-old-school-server" />;
}
