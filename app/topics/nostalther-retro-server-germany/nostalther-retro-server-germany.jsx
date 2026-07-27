import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-germany');
}

export default function NostaltherRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-germany" />;
}
