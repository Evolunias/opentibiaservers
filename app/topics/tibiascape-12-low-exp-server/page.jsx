import Tibiascape12LowExpServerKeywordPage, { generateMetadata } from './tibiascape-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12LowExpServerKeywordPage />;
}
