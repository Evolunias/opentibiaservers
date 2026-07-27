import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-argentina');
}

export default function OxygenotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-argentina" />;
}
