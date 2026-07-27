import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-usa');
}

export default function OxygenotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-usa" />;
}
