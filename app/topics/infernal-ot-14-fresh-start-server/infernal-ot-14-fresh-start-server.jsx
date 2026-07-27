import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-fresh-start-server');
}

export default function InfernalOt14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-fresh-start-server" />;
}
