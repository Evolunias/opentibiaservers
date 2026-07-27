import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-coxaot-website');
}

export default function NoResetCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-coxaot-website" />;
}
