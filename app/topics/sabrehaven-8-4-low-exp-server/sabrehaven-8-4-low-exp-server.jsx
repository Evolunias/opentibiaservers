import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-low-exp-server');
}

export default function Sabrehaven84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-low-exp-server" />;
}
