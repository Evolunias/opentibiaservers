import ActiveTibijkaLoginKeywordPage, { generateMetadata } from './active-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaLoginKeywordPage />;
}
