import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-low-exp-server');
}

export default function Originaltibia1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-low-exp-server" />;
}
