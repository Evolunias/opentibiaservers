import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-open-tibia-server-latin-america');
}

export default function LowExpOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-open-tibia-server-latin-america" />;
}
