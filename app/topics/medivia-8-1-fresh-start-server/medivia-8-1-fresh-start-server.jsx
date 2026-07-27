import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-fresh-start-server');
}

export default function Medivia81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-fresh-start-server" />;
}
