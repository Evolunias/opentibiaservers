import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-client');
}

export default function FreshStartTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-client" />;
}
