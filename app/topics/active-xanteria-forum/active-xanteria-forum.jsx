import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-forum');
}

export default function ActiveXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-forum" />;
}
