import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-brazil');
}

export default function TibiaretroLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-brazil" />;
}
