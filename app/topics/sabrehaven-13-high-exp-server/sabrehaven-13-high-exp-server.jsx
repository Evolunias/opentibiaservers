import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-high-exp-server');
}

export default function Sabrehaven13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-high-exp-server" />;
}
