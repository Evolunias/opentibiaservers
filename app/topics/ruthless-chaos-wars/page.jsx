import RuthlessChaosWarsKeywordPage, { generateMetadata } from './ruthless-chaos-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosWarsKeywordPage />;
}
