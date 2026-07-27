import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-europe');
}

export default function SabrehavenRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-europe" />;
}
