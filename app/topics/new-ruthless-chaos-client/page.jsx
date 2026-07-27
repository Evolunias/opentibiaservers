import NewRuthlessChaosClientKeywordPage, { generateMetadata } from './new-ruthless-chaos-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRuthlessChaosClientKeywordPage />;
}
