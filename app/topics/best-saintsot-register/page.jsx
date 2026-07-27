import BestSaintsotRegisterKeywordPage, { generateMetadata } from './best-saintsot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotRegisterKeywordPage />;
}
