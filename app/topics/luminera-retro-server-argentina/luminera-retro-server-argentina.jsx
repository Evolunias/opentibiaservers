import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-argentina');
}

export default function LumineraRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-argentina" />;
}
