import Medivia80LowExpServerKeywordPage, { generateMetadata } from './medivia-8-0-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia80LowExpServerKeywordPage />;
}
