import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-europe');
}

export default function OxygenotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-europe" />;
}
