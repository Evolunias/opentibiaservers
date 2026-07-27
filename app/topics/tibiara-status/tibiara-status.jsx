import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-status');
}

export default function TibiaraStatusKeywordPage() {
  return <StaticKeywordPage slug="tibiara-status" />;
}
