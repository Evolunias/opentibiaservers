import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-official');
}

export default function OfficialEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-official" />;
}
