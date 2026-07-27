import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-poland');
}

export default function RealeraRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-poland" />;
}
