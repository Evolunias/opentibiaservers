import Tibiascape14LowExpServerKeywordPage, { generateMetadata } from './tibiascape-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14LowExpServerKeywordPage />;
}
