import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-servers-south-america');
}

export default function EvoServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-servers-south-america" />;
}
