import ActiveTibianusServerKeywordPage, { generateMetadata } from './active-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusServerKeywordPage />;
}
