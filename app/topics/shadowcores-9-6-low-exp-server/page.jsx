import Shadowcores96LowExpServerKeywordPage, { generateMetadata } from './shadowcores-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores96LowExpServerKeywordPage />;
}
