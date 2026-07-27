import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-server');
}

export default function FreshStartTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-server" />;
}
