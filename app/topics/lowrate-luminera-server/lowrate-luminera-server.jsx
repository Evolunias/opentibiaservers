import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-luminera-server');
}

export default function LowrateLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-luminera-server" />;
}
