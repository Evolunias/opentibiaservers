import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-canada');
}

export default function OxygenotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-canada" />;
}
