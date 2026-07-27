import Luminera80LowExpServerKeywordPage, { generateMetadata } from './luminera-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80LowExpServerKeywordPage />;
}
