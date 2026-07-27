import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-servers-south-america');
}

export default function PvpServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-servers-south-america" />;
}
