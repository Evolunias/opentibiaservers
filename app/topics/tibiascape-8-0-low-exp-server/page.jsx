import Tibiascape80LowExpServerKeywordPage, { generateMetadata } from './tibiascape-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80LowExpServerKeywordPage />;
}
