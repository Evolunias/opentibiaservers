import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-germany');
}

export default function RetroOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-germany" />;
}
