import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-community');
}

export default function HarmoniaCommunityKeywordPage() {
  return <StaticKeywordPage slug="harmonia-community" />;
}
