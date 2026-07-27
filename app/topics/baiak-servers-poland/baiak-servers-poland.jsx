import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-poland');
}

export default function BaiakServersPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-poland" />;
}
