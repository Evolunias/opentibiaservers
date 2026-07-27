import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-server');
}

export default function ActiveElderaServerKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-server" />;
}
