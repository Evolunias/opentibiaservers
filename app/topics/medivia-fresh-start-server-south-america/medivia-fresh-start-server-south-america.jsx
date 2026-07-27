import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-south-america');
}

export default function MediviaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-south-america" />;
}
