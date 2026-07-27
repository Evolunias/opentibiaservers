import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-server');
}

export default function ActiveImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-server" />;
}
