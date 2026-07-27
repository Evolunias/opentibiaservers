import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot');
}

export default function NewSaintsotKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot" />;
}
