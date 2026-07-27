import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-canada-server');
}

export default function LumineraCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-canada-server" />;
}
