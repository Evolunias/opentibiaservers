import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-alastera-server');
}

export default function RetroAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="retro-alastera-server" />;
}
