import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-private-server');
}

export default function ActiveElderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-private-server" />;
}
