import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-server');
}

export default function NewElderaServerKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-server" />;
}
