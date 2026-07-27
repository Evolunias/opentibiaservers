import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-private-server');
}

export default function CustomClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-private-server" />;
}
