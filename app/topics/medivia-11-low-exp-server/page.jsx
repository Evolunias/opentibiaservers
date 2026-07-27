import Medivia11LowExpServerKeywordPage, { generateMetadata } from './medivia-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11LowExpServerKeywordPage />;
}
