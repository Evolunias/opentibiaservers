import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-eldera-server');
}

export default function RetroElderaServerKeywordPage() {
  return <StaticKeywordPage slug="retro-eldera-server" />;
}
