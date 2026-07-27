import CurrentRuthlessChaosPrivateServerKeywordPage, { generateMetadata } from './current-ruthless-chaos-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosPrivateServerKeywordPage />;
}
