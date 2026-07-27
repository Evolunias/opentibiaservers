import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-enforced-server-latin-america');
}

export default function DemolidoresPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-enforced-server-latin-america" />;
}
