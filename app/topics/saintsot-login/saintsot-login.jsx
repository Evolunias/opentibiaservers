import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-login');
}

export default function SaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="saintsot-login" />;
}
