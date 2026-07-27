import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-server');
}

export default function ActiveTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-server" />;
}
