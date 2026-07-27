import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-europe');
}

export default function RealestaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-europe" />;
}
