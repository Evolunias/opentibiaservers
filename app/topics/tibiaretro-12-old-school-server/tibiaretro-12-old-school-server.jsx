import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-old-school-server');
}

export default function Tibiaretro12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-old-school-server" />;
}
