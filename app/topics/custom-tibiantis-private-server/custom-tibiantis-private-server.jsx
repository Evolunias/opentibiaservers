import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-private-server');
}

export default function CustomTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-private-server" />;
}
