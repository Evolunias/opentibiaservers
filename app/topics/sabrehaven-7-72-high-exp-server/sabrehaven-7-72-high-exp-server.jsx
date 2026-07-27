import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-high-exp-server');
}

export default function Sabrehaven772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-high-exp-server" />;
}
