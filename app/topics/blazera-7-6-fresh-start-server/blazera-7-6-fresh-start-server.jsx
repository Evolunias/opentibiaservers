import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-fresh-start-server');
}

export default function Blazera76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-fresh-start-server" />;
}
