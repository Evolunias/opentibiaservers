import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-europe');
}

export default function LumineraRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-europe" />;
}
