import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-usa');
}

export default function RealeraRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-usa" />;
}
