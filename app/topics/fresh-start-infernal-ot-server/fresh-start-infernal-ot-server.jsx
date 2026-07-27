import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-server');
}

export default function FreshStartInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-server" />;
}
