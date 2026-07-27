import Medivia11HighExpServerKeywordPage, { generateMetadata } from './medivia-11-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11HighExpServerKeywordPage />;
}
