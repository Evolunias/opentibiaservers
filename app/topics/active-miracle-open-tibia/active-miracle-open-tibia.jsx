import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-miracle-open-tibia');
}

export default function ActiveMiracleOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-miracle-open-tibia" />;
}
