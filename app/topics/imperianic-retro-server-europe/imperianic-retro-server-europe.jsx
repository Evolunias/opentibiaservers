import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-europe');
}

export default function ImperianicRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-europe" />;
}
