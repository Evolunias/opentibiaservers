import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-poland');
}

export default function RetroClientPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-client-poland" />;
}
