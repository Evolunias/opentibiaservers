import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ranger-s-arcani-server');
}

export default function RetroRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="retro-ranger-s-arcani-server" />;
}
