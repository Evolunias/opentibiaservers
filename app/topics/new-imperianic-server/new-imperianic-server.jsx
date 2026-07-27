import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic-server');
}

export default function NewImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic-server" />;
}
