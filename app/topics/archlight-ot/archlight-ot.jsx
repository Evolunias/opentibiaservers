import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-ot');
}

export default function ArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="archlight-ot" />;
}
