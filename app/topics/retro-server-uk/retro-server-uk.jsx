import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-uk');
}

export default function RetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="retro-server-uk" />;
}
