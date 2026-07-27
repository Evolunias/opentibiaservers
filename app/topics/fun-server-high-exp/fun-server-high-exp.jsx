import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-high-exp');
}

export default function FunServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="fun-server-high-exp" />;
}
