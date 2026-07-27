import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-fresh-start-server');
}

export default function InfernalOt74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-fresh-start-server" />;
}
