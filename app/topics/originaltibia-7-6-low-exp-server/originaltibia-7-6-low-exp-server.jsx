import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-low-exp-server');
}

export default function Originaltibia76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-low-exp-server" />;
}
