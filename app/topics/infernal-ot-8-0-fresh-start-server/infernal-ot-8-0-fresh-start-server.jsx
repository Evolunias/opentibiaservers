import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-fresh-start-server');
}

export default function InfernalOt80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-fresh-start-server" />;
}
