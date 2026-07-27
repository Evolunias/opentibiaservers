import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-evo-server');
}

export default function Sabrehaven71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-evo-server" />;
}
