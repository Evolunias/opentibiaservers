import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-fresh-start-server');
}

export default function Medivia12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-fresh-start-server" />;
}
