import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-server');
}

export default function LumineraServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-server" />;
}
