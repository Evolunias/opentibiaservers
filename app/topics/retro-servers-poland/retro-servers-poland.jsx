import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-servers-poland');
}

export default function RetroServersPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-servers-poland" />;
}
