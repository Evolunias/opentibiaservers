import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-europe');
}

export default function RetroServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-europe" />;
}
