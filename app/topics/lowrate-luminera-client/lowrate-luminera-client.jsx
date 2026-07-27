import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-client');
}

export default function LowrateLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-client" />;
}
