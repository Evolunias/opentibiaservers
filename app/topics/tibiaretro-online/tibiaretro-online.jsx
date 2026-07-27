import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-online');
}

export default function TibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-online" />;
}
