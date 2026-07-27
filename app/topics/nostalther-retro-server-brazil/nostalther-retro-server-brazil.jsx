import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-brazil');
}

export default function NostaltherRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-brazil" />;
}
