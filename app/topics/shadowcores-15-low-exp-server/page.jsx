import Shadowcores15LowExpServerKeywordPage, { generateMetadata } from './shadowcores-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15LowExpServerKeywordPage />;
}
