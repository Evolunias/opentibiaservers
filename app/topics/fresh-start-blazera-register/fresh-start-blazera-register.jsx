import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-register');
}

export default function FreshStartBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-register" />;
}
