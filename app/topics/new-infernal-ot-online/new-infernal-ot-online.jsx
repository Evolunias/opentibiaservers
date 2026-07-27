import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-online');
}

export default function NewInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-online" />;
}
