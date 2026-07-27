import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-south-america');
}

export default function ImperianicRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-south-america" />;
}
