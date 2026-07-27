import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-register');
}

export default function NewElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-register" />;
}
