import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-old-school-server');
}

export default function Tibiaretro80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-old-school-server" />;
}
