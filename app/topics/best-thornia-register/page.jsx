import BestThorniaRegisterKeywordPage, { generateMetadata } from './best-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestThorniaRegisterKeywordPage />;
}
