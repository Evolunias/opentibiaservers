import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-high-exp-server');
}

export default function Sabrehaven14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-high-exp-server" />;
}
