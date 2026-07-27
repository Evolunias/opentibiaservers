import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot');
}

export default function ActiveSaintsotKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot" />;
}
