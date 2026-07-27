import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-rules');
}

export default function ArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="archlight-rules" />;
}
