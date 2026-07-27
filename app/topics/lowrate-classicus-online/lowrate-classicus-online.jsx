import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classicus-online');
}

export default function LowrateClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classicus-online" />;
}
