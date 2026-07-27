import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classicus-server');
}

export default function ActiveClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="active-classicus-server" />;
}
