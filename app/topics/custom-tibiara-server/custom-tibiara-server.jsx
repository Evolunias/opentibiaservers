import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-server');
}

export default function CustomTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-server" />;
}
