import RuthlessChaosStatusKeywordPage, { generateMetadata } from './ruthless-chaos-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosStatusKeywordPage />;
}
