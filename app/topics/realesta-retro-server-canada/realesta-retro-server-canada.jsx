import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-canada');
}

export default function RealestaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-canada" />;
}
