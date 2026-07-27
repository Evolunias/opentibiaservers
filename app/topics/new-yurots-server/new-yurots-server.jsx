import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-yurots-server');
}

export default function NewYurotsServerKeywordPage() {
  return <StaticKeywordPage slug="new-yurots-server" />;
}
