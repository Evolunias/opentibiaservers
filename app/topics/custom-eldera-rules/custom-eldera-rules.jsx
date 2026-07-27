import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-rules');
}

export default function CustomElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-rules" />;
}
