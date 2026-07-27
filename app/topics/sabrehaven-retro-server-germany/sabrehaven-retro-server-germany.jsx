import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-germany');
}

export default function SabrehavenRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-germany" />;
}
