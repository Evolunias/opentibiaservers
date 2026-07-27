import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-online');
}

export default function InfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-online" />;
}
