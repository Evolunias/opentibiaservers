import RuthlessChaosKeywordPage, { generateMetadata } from './ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosKeywordPage />;
}
