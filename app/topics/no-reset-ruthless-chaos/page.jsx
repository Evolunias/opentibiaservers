import NoResetRuthlessChaosKeywordPage, { generateMetadata } from './no-reset-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRuthlessChaosKeywordPage />;
}
