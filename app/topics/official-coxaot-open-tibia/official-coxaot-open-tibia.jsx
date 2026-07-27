import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-open-tibia');
}

export default function OfficialCoxaotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-open-tibia" />;
}
