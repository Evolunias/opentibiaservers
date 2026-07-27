import BestImperianicRegisterKeywordPage, { generateMetadata } from './best-imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicRegisterKeywordPage />;
}
