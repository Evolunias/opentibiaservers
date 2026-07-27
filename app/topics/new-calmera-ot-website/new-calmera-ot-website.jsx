import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-website');
}

export default function NewCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-website" />;
}
