import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realesta-client');
}

export default function ActiveRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="active-realesta-client" />;
}
