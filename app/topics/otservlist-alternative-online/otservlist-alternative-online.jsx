import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-online');
}

export default function OtservlistAlternativeOnlineKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-online" />;
}
