import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-server');
}

export default function NoResetImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-server" />;
}
