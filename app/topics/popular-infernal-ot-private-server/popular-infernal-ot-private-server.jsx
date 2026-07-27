import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-private-server');
}

export default function PopularInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-private-server" />;
}
