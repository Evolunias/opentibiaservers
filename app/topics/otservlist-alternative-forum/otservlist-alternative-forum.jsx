import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-forum');
}

export default function OtservlistAlternativeForumKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-forum" />;
}
