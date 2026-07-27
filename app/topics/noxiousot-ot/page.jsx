import NoxiousotOtKeywordPage, { generateMetadata } from './noxiousot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotOtKeywordPage />;
}
