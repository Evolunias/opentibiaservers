import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-register');
}

export default function FreshStartTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-register" />;
}
