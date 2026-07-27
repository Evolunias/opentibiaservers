import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-high-exp-server');
}

export default function Sabrehaven15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-high-exp-server" />;
}
