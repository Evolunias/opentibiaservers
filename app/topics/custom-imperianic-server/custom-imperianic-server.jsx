import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-server');
}

export default function CustomImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-server" />;
}
