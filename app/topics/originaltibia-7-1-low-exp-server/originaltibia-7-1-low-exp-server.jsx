import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-low-exp-server');
}

export default function Originaltibia71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-low-exp-server" />;
}
