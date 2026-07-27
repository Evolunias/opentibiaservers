import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-login');
}

export default function FreshStartSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-login" />;
}
