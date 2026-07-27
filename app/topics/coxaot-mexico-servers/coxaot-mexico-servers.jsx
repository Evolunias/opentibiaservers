import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-mexico-servers');
}

export default function CoxaotMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-mexico-servers" />;
}
