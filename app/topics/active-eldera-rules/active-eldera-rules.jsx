import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eldera-rules');
}

export default function ActiveElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="active-eldera-rules" />;
}
