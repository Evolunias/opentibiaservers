import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-europe-server');
}

export default function LumineraEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-europe-server" />;
}
