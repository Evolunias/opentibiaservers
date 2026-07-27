import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-online');
}

export default function LowrateXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-online" />;
}
