import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-tibia');
}

export default function OfficialCoxaotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-tibia" />;
}
