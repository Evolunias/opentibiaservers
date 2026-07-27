import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-98-high-exp-server');
}

export default function Originaltibia1098HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-98-high-exp-server" />;
}
