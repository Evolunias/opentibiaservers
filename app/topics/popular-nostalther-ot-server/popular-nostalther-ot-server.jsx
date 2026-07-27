import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-ot-server');
}

export default function PopularNostaltherOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-ot-server" />;
}
