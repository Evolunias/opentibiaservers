import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-online');
}

export default function OtlandServerGalaOnlineKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-online" />;
}
