import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-fresh-start-server');
}

export default function Medivia100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-fresh-start-server" />;
}
