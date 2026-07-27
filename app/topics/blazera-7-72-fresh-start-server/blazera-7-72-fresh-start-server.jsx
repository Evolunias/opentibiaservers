import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-fresh-start-server');
}

export default function Blazera772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-fresh-start-server" />;
}
