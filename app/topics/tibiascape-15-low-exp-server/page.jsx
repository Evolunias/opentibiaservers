import Tibiascape15LowExpServerKeywordPage, { generateMetadata } from './tibiascape-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15LowExpServerKeywordPage />;
}
