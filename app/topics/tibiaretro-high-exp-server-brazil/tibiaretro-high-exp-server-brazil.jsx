import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-brazil');
}

export default function TibiaretroHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-brazil" />;
}
