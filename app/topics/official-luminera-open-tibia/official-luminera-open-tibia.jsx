import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-open-tibia');
}

export default function OfficialLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-open-tibia" />;
}
