import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-register');
}

export default function FreshStartNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-register" />;
}
