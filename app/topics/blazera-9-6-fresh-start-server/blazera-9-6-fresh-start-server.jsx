import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-fresh-start-server');
}

export default function Blazera96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-fresh-start-server" />;
}
