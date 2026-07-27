import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-online');
}

export default function ObsidiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="obsidia-online" />;
}
