import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-europe');
}

export default function NostaltherRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-europe" />;
}
