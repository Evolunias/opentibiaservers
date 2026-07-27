import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot');
}

export default function CustomSaintsotKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot" />;
}
