import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-non-pvp-server');
}

export default function InfernalOt71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-non-pvp-server" />;
}
