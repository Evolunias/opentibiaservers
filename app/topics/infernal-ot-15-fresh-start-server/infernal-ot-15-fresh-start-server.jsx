import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-fresh-start-server');
}

export default function InfernalOt15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-fresh-start-server" />;
}
