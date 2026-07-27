import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-latin-america');
}

export default function UnlinePvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-latin-america" />;
}
