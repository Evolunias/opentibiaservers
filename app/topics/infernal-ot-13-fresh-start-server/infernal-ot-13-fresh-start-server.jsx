import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-fresh-start-server');
}

export default function InfernalOt13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-fresh-start-server" />;
}
