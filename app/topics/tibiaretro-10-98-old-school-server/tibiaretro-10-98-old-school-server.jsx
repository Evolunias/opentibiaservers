import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-old-school-server');
}

export default function Tibiaretro1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-old-school-server" />;
}
