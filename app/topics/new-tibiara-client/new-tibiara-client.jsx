import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-client');
}

export default function NewTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-client" />;
}
