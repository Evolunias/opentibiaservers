import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-register');
}

export default function FreshStartTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-register" />;
}
