import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-register');
}

export default function FreshStartRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-register" />;
}
