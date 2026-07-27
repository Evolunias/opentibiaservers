import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-open-tibia');
}

export default function CustomMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-open-tibia" />;
}
