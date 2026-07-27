import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-retro-server-poland');
}

export default function SabrehavenRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-retro-server-poland" />;
}
