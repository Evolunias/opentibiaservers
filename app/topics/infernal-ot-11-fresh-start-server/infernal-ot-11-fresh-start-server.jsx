import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-fresh-start-server');
}

export default function InfernalOt11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-fresh-start-server" />;
}
