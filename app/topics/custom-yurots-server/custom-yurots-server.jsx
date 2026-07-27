import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-server');
}

export default function CustomYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-server" />;
}
