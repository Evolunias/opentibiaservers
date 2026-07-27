import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-client');
}

export default function NewSeasonCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-client" />;
}
