import NewRuthlessChaosServerKeywordPage, { generateMetadata } from './new-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRuthlessChaosServerKeywordPage />;
}
