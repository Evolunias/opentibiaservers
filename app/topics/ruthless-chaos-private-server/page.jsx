import RuthlessChaosPrivateServerKeywordPage, { generateMetadata } from './ruthless-chaos-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosPrivateServerKeywordPage />;
}
