import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-usa');
}

export default function NostaltherRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-usa" />;
}
