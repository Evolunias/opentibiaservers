import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-non-pvp-server-europe');
}

export default function InfernalOtNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-non-pvp-server-europe" />;
}
