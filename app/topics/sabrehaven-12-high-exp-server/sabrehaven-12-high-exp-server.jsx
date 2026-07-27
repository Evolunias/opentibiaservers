import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-high-exp-server');
}

export default function Sabrehaven12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-high-exp-server" />;
}
