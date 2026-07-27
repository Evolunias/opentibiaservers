import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-uk');
}

export default function RetroOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-uk" />;
}
