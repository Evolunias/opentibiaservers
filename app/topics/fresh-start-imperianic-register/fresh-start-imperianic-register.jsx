import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-register');
}

export default function FreshStartImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-register" />;
}
