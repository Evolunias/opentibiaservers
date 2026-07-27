import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-uk');
}

export default function LumineraRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-uk" />;
}
