import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-evo-server');
}

export default function Sabrehaven76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-evo-server" />;
}
