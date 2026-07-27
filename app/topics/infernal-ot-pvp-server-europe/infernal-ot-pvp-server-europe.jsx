import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvp-server-europe');
}

export default function InfernalOtPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvp-server-europe" />;
}
