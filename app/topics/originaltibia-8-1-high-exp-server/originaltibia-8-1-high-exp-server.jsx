import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-high-exp-server');
}

export default function Originaltibia81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-high-exp-server" />;
}
