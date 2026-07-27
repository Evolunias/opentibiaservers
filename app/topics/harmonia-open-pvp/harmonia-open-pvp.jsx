import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-open-pvp');
}

export default function HarmoniaOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="harmonia-open-pvp" />;
}
