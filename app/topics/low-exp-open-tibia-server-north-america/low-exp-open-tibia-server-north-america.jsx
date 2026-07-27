import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-north-america');
}

export default function LowExpOpenTibiaServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-north-america" />;
}
