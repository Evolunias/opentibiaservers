import BestClassicusOtServerKeywordPage, { generateMetadata } from './best-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusOtServerKeywordPage />;
}
