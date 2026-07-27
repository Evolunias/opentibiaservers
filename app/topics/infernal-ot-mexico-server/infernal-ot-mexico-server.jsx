import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-mexico-server');
}

export default function InfernalOtMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-mexico-server" />;
}
