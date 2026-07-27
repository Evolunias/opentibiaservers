import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-server');
}

export default function CustomClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-server" />;
}
