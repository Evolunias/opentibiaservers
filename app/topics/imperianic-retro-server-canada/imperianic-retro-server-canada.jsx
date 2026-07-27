import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-canada');
}

export default function ImperianicRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-canada" />;
}
