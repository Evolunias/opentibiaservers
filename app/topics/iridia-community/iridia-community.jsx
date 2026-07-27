import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-community');
}

export default function IridiaCommunityKeywordPage() {
  return <StaticKeywordPage slug="iridia-community" />;
}
