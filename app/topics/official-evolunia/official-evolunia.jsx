import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia');
}

export default function OfficialEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia" />;
}
