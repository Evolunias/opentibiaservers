import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-uk');
}

export default function RetroServersUkKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-uk" />;
}
