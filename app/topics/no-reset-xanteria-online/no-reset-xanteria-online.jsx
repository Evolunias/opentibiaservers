import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-online');
}

export default function NoResetXanteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-online" />;
}
