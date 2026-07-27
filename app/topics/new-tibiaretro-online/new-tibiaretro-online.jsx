import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-online');
}

export default function NewTibiaretroOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-online" />;
}
