import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-private-server');
}

export default function FreshStartInfernalOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-private-server" />;
}
