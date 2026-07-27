import BestNoxiousotKeywordPage, { generateMetadata } from './best-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNoxiousotKeywordPage />;
}
