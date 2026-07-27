import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-mist-of-death-server');
}

export default function RetroMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="retro-mist-of-death-server" />;
}
