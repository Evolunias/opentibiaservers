import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-germany');
}

export default function RetroClientGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-client-germany" />;
}
