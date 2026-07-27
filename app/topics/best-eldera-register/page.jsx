import BestElderaRegisterKeywordPage, { generateMetadata } from './best-eldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaRegisterKeywordPage />;
}
