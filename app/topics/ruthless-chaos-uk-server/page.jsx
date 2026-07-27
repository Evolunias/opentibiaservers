import RuthlessChaosUkServerKeywordPage, { generateMetadata } from './ruthless-chaos-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosUkServerKeywordPage />;
}
