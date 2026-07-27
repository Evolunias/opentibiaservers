import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-rules');
}

export default function NewElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-rules" />;
}
