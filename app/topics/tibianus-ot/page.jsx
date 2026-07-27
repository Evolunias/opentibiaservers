import TibianusOtKeywordPage, { generateMetadata } from './tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusOtKeywordPage />;
}
