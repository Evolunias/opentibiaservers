import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-high-exp-server');
}

export default function Sabrehaven86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-high-exp-server" />;
}
