import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-fresh-start-server');
}

export default function InfernalOt84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-fresh-start-server" />;
}
