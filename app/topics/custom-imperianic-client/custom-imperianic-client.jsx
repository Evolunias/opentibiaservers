import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-client');
}

export default function CustomImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-client" />;
}
