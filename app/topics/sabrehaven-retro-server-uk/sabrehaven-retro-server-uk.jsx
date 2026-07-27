import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-uk');
}

export default function SabrehavenRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-uk" />;
}
