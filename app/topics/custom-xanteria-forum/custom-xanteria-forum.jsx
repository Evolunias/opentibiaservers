import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-forum');
}

export default function CustomXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-forum" />;
}
