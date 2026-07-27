import Medivia14LowExpServerKeywordPage, { generateMetadata } from './medivia-14-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14LowExpServerKeywordPage />;
}
