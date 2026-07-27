import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-chile-server');
}

export default function LumineraChileServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-chile-server" />;
}
