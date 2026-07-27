import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-54-evo-server');
}

export default function Sabrehaven854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-54-evo-server" />;
}
