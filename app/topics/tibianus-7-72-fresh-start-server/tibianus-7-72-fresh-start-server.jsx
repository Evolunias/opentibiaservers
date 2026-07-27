import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-fresh-start-server');
}

export default function Tibianus772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-fresh-start-server" />;
}
