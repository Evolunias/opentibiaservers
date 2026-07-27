import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-fresh-start-server');
}

export default function Medivia1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-fresh-start-server" />;
}
