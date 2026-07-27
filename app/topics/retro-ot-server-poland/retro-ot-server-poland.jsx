import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-ot-server-poland');
}

export default function RetroOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-ot-server-poland" />;
}
