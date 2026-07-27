import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-client');
}

export default function LowrateTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-client" />;
}
