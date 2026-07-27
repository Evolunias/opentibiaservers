import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-evo-server');
}

export default function Sabrehaven14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-evo-server" />;
}
