import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dolera-open-pvp');
}

export default function DoleraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="dolera-open-pvp" />;
}
