import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-south-america');
}

export default function SabrehavenRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-south-america" />;
}
