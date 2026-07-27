import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-server');
}

export default function OfficialImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-server" />;
}
