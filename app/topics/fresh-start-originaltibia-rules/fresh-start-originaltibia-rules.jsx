import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-rules');
}

export default function FreshStartOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-rules" />;
}
