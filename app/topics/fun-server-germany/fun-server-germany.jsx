import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-germany');
}

export default function FunServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="fun-server-germany" />;
}
