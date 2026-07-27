import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-old-school-server');
}

export default function Tibiaretro84OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-old-school-server" />;
}
