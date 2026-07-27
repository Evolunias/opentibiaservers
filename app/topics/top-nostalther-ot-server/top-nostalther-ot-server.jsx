import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-ot-server');
}

export default function TopNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-ot-server" />;
}
