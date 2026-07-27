import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-europe');
}

export default function RetroOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-europe" />;
}
