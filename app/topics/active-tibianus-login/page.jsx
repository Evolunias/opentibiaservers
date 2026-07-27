import ActiveTibianusLoginKeywordPage, { generateMetadata } from './active-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusLoginKeywordPage />;
}
