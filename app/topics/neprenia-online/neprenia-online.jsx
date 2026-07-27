import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-online');
}

export default function NepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="neprenia-online" />;
}
