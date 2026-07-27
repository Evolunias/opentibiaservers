import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-argentina');
}

export default function RealeraRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-argentina" />;
}
