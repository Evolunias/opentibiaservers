import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-europe');
}

export default function RetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-server-europe" />;
}
