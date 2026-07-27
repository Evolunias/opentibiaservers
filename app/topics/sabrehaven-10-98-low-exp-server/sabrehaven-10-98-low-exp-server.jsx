import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-98-low-exp-server');
}

export default function Sabrehaven1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-98-low-exp-server" />;
}
