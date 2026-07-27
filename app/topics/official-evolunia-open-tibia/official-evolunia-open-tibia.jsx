import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-open-tibia');
}

export default function OfficialEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-open-tibia" />;
}
