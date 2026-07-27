import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-fresh-start-server');
}

export default function Blazera84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-fresh-start-server" />;
}
