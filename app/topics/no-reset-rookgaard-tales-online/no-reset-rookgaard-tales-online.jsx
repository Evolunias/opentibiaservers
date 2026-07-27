import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-online');
}

export default function NoResetRookgaardTalesOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-online" />;
}
