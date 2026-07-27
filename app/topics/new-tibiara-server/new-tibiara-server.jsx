import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-server');
}

export default function NewTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-server" />;
}
