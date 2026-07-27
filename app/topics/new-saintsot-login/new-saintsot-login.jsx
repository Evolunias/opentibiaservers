import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-login');
}

export default function NewSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-login" />;
}
