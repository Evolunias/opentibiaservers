import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-canada');
}

export default function NostaltherRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-canada" />;
}
