import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-open-tibia');
}

export default function TopMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-open-tibia" />;
}
