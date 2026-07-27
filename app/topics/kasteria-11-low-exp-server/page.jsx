import Kasteria11LowExpServerKeywordPage, { generateMetadata } from './kasteria-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11LowExpServerKeywordPage />;
}
