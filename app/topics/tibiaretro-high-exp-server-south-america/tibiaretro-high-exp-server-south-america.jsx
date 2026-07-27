import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-south-america');
}

export default function TibiaretroHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-south-america" />;
}
