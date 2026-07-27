import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-poland');
}

export default function OxygenotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-poland" />;
}
