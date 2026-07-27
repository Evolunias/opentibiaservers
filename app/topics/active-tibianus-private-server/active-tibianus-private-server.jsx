import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-private-server');
}

export default function ActiveTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-private-server" />;
}
