import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-client');
}

export default function ActiveTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-client" />;
}
