import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-mexico');
}

export default function NostaltherRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-mexico" />;
}
