import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-official');
}

export default function EvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="evolunia-official" />;
}
