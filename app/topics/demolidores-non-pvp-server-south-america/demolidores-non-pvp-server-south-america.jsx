import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-non-pvp-server-south-america');
}

export default function DemolidoresNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-non-pvp-server-south-america" />;
}
