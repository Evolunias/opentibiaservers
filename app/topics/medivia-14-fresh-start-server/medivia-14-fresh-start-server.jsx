import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-fresh-start-server');
}

export default function Medivia14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-fresh-start-server" />;
}
