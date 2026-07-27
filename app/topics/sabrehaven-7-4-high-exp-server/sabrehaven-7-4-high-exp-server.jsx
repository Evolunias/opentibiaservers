import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-4-high-exp-server');
}

export default function Sabrehaven74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-4-high-exp-server" />;
}
