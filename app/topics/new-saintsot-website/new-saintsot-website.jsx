import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-website');
}

export default function NewSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-website" />;
}
