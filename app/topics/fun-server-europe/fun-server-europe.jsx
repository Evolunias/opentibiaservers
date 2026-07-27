import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-europe');
}

export default function FunServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="fun-server-europe" />;
}
