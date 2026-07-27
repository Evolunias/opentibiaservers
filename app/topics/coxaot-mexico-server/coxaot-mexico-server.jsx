import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-mexico-server');
}

export default function CoxaotMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-mexico-server" />;
}
