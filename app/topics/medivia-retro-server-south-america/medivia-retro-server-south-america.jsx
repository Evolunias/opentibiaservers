import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-retro-server-south-america');
}

export default function MediviaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-retro-server-south-america" />;
}
