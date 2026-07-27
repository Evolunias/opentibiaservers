import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-download');
}

export default function ActiveMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-download" />;
}
