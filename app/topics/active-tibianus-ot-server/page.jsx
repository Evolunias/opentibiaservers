import ActiveTibianusOtServerKeywordPage, { generateMetadata } from './active-tibianus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusOtServerKeywordPage />;
}
