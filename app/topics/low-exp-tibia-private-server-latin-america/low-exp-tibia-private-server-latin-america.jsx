import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibia-private-server-latin-america');
}

export default function LowExpTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibia-private-server-latin-america" />;
}
