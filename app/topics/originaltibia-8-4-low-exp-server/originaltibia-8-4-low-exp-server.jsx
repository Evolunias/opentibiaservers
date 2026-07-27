import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-low-exp-server');
}

export default function Originaltibia84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-low-exp-server" />;
}
