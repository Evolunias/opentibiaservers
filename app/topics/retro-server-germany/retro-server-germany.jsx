import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-germany');
}

export default function RetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-server-germany" />;
}
