import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-europe-servers');
}

export default function InfernalOtEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-europe-servers" />;
}
