import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-old-school-server');
}

export default function Tibiaretro14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-old-school-server" />;
}
