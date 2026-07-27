import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-bosses');
}

export default function EvoluniaBossesKeywordPage() {
  return <StaticKeywordPage slug="evolunia-bosses" />;
}
