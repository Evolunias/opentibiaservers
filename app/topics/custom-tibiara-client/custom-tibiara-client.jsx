import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-client');
}

export default function CustomTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-client" />;
}
