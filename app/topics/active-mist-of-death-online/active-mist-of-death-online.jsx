import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-online');
}

export default function ActiveMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-online" />;
}
