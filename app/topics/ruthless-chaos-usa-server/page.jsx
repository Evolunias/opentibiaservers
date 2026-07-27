import RuthlessChaosUsaServerKeywordPage, { generateMetadata } from './ruthless-chaos-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosUsaServerKeywordPage />;
}
