import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-website');
}

export default function NoResetZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-website" />;
}
