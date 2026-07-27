import Medivia15LowExpServerKeywordPage, { generateMetadata } from './medivia-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15LowExpServerKeywordPage />;
}
