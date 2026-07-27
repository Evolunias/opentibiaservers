import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tenebra-online');
}

export default function TenebraOnlineKeywordPage() {
  return <StaticKeywordPage slug="tenebra-online" />;
}
