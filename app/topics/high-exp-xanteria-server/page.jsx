import HighExpXanteriaServerKeywordPage, { generateMetadata } from './high-exp-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpXanteriaServerKeywordPage />;
}
