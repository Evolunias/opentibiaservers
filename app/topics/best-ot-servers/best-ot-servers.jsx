import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-servers');
}

export default function BestOtServersKeywordPage() {
  return <StaticKeywordPage slug="best-ot-servers" />;
}
