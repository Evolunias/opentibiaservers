import Shadowcores11LowExpServerKeywordPage, { generateMetadata } from './shadowcores-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11LowExpServerKeywordPage />;
}
