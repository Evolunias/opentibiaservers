import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-login');
}

export default function CustomSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-login" />;
}
