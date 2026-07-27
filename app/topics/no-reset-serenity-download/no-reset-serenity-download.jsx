import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-download');
}

export default function NoResetSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-download" />;
}
