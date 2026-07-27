import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-poland');
}

export default function NostaltherRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-poland" />;
}
