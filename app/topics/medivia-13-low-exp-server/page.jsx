import Medivia13LowExpServerKeywordPage, { generateMetadata } from './medivia-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13LowExpServerKeywordPage />;
}
