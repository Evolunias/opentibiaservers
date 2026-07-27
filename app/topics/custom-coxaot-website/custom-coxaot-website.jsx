import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-website');
}

export default function CustomCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-website" />;
}
