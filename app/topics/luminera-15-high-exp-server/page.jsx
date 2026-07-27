import Luminera15HighExpServerKeywordPage, { generateMetadata } from './luminera-15-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15HighExpServerKeywordPage />;
}
