import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-website');
}

export default function NewCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-website" />;
}
