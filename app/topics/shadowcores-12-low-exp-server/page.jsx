import Shadowcores12LowExpServerKeywordPage, { generateMetadata } from './shadowcores-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12LowExpServerKeywordPage />;
}
