import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-community');
}

export default function GuardiaCommunityKeywordPage() {
  return <StaticKeywordPage slug="guardia-community" />;
}
