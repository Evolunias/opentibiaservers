import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-vip');
}

export default function TibiaretroVipKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-vip" />;
}
