import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-fresh-start-server');
}

export default function Blazera13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-fresh-start-server" />;
}
