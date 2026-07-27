import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-germany-server');
}

export default function LumineraGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-germany-server" />;
}
