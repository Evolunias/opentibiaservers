import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-xanteria-online');
}

export default function HighrateXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-xanteria-online" />;
}
