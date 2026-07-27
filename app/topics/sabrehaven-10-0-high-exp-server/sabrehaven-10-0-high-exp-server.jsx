import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-high-exp-server');
}

export default function Sabrehaven100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-high-exp-server" />;
}
