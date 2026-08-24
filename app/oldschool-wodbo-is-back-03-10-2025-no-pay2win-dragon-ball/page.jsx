import { LegacyServerRoute, buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export const revalidate = 3600;

export function generateMetadata() {
  return buildCanonicalServerMetadata("oldschool-wodbo-is-back-03-10-2025-no-pay2win-dragon-ball");
}

export default function Page() {
  return <LegacyServerRoute slug="oldschool-wodbo-is-back-03-10-2025-no-pay2win-dragon-ball" />;
}
