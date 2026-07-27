import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-high-exp-server');
}

export default function Sabrehaven84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-high-exp-server" />;
}
