import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-website');
}

export default function NewEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-website" />;
}
