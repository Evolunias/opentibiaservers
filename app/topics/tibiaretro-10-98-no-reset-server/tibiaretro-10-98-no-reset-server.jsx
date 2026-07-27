import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-no-reset-server');
}

export default function Tibiaretro1098NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-no-reset-server" />;
}
