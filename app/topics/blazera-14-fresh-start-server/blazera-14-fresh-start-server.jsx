import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-fresh-start-server');
}

export default function Blazera14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-fresh-start-server" />;
}
