import BestXanteriaKeywordPage, { generateMetadata } from './best-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaKeywordPage />;
}
