import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-fresh-start-server');
}

export default function Medivia96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-fresh-start-server" />;
}
