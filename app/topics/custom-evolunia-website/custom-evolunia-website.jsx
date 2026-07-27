import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-website');
}

export default function CustomEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-website" />;
}
