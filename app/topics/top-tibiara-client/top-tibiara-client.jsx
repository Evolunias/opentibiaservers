import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-client');
}

export default function TopTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-client" />;
}
