import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-website');
}

export default function NoResetTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-website" />;
}
