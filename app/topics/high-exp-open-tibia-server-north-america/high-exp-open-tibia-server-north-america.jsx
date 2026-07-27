import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-open-tibia-server-north-america');
}

export default function HighExpOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-open-tibia-server-north-america" />;
}
