import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-old-school-server');
}

export default function Tibiaretro11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-old-school-server" />;
}
