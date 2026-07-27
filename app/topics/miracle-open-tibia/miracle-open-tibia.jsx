import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-open-tibia');
}

export default function MiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="miracle-open-tibia" />;
}
