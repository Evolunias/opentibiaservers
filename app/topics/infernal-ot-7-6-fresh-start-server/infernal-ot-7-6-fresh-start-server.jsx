import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-fresh-start-server');
}

export default function InfernalOt76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-fresh-start-server" />;
}
