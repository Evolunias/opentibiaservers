import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-client');
}

export default function ActiveImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-client" />;
}
