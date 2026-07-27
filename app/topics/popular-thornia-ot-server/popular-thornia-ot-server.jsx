import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-ot-server');
}

export default function PopularThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-ot-server" />;
}
