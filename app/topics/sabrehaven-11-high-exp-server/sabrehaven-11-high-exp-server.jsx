import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-high-exp-server');
}

export default function Sabrehaven11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-high-exp-server" />;
}
