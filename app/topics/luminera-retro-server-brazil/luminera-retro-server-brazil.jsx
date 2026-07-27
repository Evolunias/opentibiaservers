import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-brazil');
}

export default function LumineraRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-brazil" />;
}
