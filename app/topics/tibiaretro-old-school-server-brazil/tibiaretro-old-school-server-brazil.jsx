import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-brazil');
}

export default function TibiaretroOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-brazil" />;
}
