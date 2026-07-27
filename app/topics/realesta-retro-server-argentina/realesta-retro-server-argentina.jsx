import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-argentina');
}

export default function RealestaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-argentina" />;
}
