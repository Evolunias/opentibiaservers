import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-south-america');
}

export default function TibiaretroLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-south-america" />;
}
