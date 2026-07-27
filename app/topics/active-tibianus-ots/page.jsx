import ActiveTibianusOtsKeywordPage, { generateMetadata } from './active-tibianus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusOtsKeywordPage />;
}
