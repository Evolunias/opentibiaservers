import BestXanteriaRegisterKeywordPage, { generateMetadata } from './best-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestXanteriaRegisterKeywordPage />;
}
