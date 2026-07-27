import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-online');
}

export default function MistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-online" />;
}
