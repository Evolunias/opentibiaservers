import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-servers-germany');
}

export default function FreshStartServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-servers-germany" />;
}
