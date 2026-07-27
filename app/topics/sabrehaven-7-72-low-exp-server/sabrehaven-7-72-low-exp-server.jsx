import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-72-low-exp-server');
}

export default function Sabrehaven772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-72-low-exp-server" />;
}
