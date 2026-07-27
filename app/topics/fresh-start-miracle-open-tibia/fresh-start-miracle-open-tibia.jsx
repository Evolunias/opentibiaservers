import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-open-tibia');
}

export default function FreshStartMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-open-tibia" />;
}
