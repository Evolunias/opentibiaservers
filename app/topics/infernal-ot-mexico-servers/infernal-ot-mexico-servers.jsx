import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-mexico-servers');
}

export default function InfernalOtMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-mexico-servers" />;
}
