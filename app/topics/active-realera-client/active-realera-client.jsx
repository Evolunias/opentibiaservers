import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-client');
}

export default function ActiveRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="active-realera-client" />;
}
