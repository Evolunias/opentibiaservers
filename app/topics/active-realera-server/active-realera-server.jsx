import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-server');
}

export default function ActiveRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="active-realera-server" />;
}
