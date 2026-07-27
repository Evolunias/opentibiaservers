import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-poland');
}

export default function ImperianicRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-poland" />;
}
