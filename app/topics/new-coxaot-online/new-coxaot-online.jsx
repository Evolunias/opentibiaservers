import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-online');
}

export default function NewCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-online" />;
}
