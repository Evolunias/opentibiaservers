import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-argentina');
}

export default function NostaltherRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-argentina" />;
}
