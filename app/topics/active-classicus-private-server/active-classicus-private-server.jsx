import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-private-server');
}

export default function ActiveClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-private-server" />;
}
