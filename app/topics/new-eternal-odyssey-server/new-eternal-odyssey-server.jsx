import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-server');
}

export default function NewEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-server" />;
}
