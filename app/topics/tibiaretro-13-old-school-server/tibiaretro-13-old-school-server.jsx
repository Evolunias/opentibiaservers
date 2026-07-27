import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-old-school-server');
}

export default function Tibiaretro13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-old-school-server" />;
}
