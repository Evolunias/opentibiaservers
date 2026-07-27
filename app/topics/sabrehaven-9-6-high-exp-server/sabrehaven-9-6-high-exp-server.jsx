import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-high-exp-server');
}

export default function Sabrehaven96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-high-exp-server" />;
}
