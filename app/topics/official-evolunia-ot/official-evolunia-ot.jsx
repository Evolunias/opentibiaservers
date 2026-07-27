import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-ot');
}

export default function OfficialEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-ot" />;
}
