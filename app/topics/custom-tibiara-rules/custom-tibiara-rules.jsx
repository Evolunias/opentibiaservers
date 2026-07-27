import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-rules');
}

export default function CustomTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-rules" />;
}
