import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-old-school-server');
}

export default function Tibiaretro96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-old-school-server" />;
}
