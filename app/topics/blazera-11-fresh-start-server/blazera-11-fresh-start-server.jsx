import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-fresh-start-server');
}

export default function Blazera11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-fresh-start-server" />;
}
