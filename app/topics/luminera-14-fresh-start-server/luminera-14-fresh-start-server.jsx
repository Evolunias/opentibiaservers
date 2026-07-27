import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-fresh-start-server');
}

export default function Luminera14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-fresh-start-server" />;
}
