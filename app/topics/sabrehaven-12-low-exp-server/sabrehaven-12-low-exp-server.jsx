import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-low-exp-server');
}

export default function Sabrehaven12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-low-exp-server" />;
}
