import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-servers-online');
}

export default function OpenTibiaServersOnlineKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-servers-online" />;
}
