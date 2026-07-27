import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-community');
}

export default function DanubiaCommunityKeywordPage() {
  return <StaticKeywordPage slug="danubia-community" />;
}
