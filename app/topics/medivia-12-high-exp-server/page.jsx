import Medivia12HighExpServerKeywordPage, { generateMetadata } from './medivia-12-high-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12HighExpServerKeywordPage />;
}
