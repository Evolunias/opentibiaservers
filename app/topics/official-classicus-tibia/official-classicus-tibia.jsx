import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-tibia');
}

export default function OfficialClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-tibia" />;
}
