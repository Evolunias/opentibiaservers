import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-ot-server');
}

export default function FreshStartElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-ot-server" />;
}
