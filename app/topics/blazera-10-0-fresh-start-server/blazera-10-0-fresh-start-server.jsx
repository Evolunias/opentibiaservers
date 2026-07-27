import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-fresh-start-server');
}

export default function Blazera100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-fresh-start-server" />;
}
