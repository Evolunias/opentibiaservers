import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-open-pvp');
}

export default function ObsidiaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="obsidia-open-pvp" />;
}
