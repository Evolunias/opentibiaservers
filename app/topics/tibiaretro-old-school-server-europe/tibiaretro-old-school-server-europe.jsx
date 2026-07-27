import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-old-school-server-europe');
}

export default function TibiaretroOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-old-school-server-europe" />;
}
