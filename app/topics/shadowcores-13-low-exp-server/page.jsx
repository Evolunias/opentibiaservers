import Shadowcores13LowExpServerKeywordPage, { generateMetadata } from './shadowcores-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13LowExpServerKeywordPage />;
}
