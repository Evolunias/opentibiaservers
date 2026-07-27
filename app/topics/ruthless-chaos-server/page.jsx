import RuthlessChaosServerKeywordPage, { generateMetadata } from './ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosServerKeywordPage />;
}
