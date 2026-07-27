import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-online');
}

export default function HarmoniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="harmonia-online" />;
}
