import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-login');
}

export default function ActiveSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-login" />;
}
