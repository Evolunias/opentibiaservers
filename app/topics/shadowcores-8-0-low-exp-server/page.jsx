import Shadowcores80LowExpServerKeywordPage, { generateMetadata } from './shadowcores-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores80LowExpServerKeywordPage />;
}
