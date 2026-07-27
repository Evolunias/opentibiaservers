import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-rules');
}

export default function ElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="eldera-rules" />;
}
