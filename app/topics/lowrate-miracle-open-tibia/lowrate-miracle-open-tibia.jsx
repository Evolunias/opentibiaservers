import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-miracle-open-tibia');
}

export default function LowrateMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-miracle-open-tibia" />;
}
