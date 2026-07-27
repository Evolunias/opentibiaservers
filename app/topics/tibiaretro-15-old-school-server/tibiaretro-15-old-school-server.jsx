import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-old-school-server');
}

export default function Tibiaretro15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-old-school-server" />;
}
