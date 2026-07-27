import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-fresh-start-server');
}

export default function InfernalOt100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-fresh-start-server" />;
}
