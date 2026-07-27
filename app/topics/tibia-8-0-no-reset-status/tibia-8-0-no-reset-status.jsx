import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-no-reset-status');
}

export default function Tibia80NoResetStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-no-reset-status" />;
}
