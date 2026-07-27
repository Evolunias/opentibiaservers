import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-register');
}

export default function FreshStartClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-register" />;
}
