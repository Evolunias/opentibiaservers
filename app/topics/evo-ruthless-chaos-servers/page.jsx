import EvoRuthlessChaosServersKeywordPage, { generateMetadata } from './evo-ruthless-chaos-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRuthlessChaosServersKeywordPage />;
}
