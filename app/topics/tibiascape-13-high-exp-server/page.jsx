import Tibiascape13HighExpServerKeywordPage, { generateMetadata } from './tibiascape-13-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13HighExpServerKeywordPage />;
}
