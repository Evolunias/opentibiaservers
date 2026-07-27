import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-pvp-server-south-america');
}

export default function DemolidoresPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-pvp-server-south-america" />;
}
