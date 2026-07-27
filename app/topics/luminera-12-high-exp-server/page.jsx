import Luminera12HighExpServerKeywordPage, { generateMetadata } from './luminera-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12HighExpServerKeywordPage />;
}
