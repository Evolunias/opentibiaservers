import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-online');
}

export default function CustomInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-online" />;
}
