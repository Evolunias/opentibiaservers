import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-servers-uk');
}

export default function BaiakServersUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-servers-uk" />;
}
