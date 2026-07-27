import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-website');
}

export default function NoResetNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-website" />;
}
