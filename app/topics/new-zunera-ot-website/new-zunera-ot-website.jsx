import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-website');
}

export default function NewZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-website" />;
}
