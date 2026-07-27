import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-official');
}

export default function CurrentEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-official" />;
}
