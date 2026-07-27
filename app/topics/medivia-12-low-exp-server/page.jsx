import Medivia12LowExpServerKeywordPage, { generateMetadata } from './medivia-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12LowExpServerKeywordPage />;
}
