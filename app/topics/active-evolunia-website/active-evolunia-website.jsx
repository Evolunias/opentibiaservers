import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-website');
}

export default function ActiveEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-website" />;
}
