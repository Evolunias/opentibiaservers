import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-create-account');
}

export default function PopularEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-create-account" />;
}
