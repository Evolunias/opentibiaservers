import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-sabrehaven-server');
}

export default function RetroSabrehavenServerKeywordPage() {
  return <StaticKeywordPage slug="retro-sabrehaven-server" />;
}
