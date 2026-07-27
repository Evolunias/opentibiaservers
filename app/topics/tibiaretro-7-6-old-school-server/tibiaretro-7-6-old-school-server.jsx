import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-old-school-server');
}

export default function Tibiaretro76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-old-school-server" />;
}
