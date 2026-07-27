import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-low-exp-server');
}

export default function Originaltibia74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-low-exp-server" />;
}
