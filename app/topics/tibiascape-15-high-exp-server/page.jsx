import Tibiascape15HighExpServerKeywordPage, { generateMetadata } from './tibiascape-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15HighExpServerKeywordPage />;
}
