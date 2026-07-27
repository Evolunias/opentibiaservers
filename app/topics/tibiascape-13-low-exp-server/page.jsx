import Tibiascape13LowExpServerKeywordPage, { generateMetadata } from './tibiascape-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13LowExpServerKeywordPage />;
}
