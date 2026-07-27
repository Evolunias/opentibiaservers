import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-server-poland');
}

export default function RetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-server-poland" />;
}
