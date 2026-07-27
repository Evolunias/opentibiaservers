import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-luminera-server');
}

export default function CurrentLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="current-luminera-server" />;
}
