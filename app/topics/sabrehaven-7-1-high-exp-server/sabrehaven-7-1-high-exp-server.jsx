import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-high-exp-server');
}

export default function Sabrehaven71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-high-exp-server" />;
}
