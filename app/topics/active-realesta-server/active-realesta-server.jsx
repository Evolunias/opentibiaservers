import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-server');
}

export default function ActiveRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-server" />;
}
