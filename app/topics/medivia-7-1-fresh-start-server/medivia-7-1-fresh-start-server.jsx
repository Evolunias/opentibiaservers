import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-fresh-start-server');
}

export default function Medivia71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-fresh-start-server" />;
}
