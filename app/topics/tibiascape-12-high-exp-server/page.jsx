import Tibiascape12HighExpServerKeywordPage, { generateMetadata } from './tibiascape-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12HighExpServerKeywordPage />;
}
