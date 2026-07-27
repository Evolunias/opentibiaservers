import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-client');
}

export default function OldSchoolTibiaretroClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-client" />;
}
