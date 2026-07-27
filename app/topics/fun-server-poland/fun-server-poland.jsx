import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-poland');
}

export default function FunServerPolandKeywordPage() {
  return <StaticKeywordPage slug="fun-server-poland" />;
}
