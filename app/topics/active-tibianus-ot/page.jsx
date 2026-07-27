import ActiveTibianusOtKeywordPage, { generateMetadata } from './active-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusOtKeywordPage />;
}
