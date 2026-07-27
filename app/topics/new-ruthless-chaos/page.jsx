import NewRuthlessChaosKeywordPage, { generateMetadata } from './new-ruthless-chaos';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRuthlessChaosKeywordPage />;
}
