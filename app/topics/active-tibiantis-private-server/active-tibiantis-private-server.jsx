import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-private-server');
}

export default function ActiveTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-private-server" />;
}
