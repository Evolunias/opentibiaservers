import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-old-school-server');
}

export default function Tibiaretro100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-old-school-server" />;
}
