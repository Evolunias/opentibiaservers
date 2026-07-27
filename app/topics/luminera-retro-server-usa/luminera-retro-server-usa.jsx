import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-usa');
}

export default function LumineraRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-usa" />;
}
