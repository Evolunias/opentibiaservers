import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-website');
}

export default function NoResetCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-website" />;
}
