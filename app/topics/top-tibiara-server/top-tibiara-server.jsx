import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-server');
}

export default function TopTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-server" />;
}
