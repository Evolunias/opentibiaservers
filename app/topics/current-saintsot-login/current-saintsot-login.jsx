import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-login');
}

export default function CurrentSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-login" />;
}
