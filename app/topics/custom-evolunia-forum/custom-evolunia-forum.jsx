import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-forum');
}

export default function CustomEvoluniaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-forum" />;
}
