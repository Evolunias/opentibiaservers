import TibianusOtServerKeywordPage, { generateMetadata } from './tibianus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusOtServerKeywordPage />;
}
