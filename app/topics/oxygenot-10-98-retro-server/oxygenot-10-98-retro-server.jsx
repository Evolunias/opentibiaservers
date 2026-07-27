import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-98-retro-server');
}

export default function Oxygenot1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-98-retro-server" />;
}
