import NoResetXanteriaWebsiteKeywordPage, { generateMetadata } from './no-reset-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaWebsiteKeywordPage />;
}
