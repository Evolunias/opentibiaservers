import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-fresh-start-server');
}

export default function Coxaot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-fresh-start-server" />;
}
