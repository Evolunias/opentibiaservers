import Luminera12LowExpServerKeywordPage, { generateMetadata } from './luminera-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12LowExpServerKeywordPage />;
}
