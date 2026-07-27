import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-high-exp-server');
}

export default function Sabrehaven81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-high-exp-server" />;
}
