import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-poland');
}

export default function RealestaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-poland" />;
}
