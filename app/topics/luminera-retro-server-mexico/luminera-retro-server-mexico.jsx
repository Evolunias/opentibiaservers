import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-mexico');
}

export default function LumineraRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-mexico" />;
}
