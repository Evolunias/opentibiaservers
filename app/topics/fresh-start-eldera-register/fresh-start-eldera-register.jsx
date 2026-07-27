import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-register');
}

export default function FreshStartElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-register" />;
}
