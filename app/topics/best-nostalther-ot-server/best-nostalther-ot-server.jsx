import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-ot-server');
}

export default function BestNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-ot-server" />;
}
